import { createStore } from 'vuex'
import { axios } from "@/common/api.service.js";


export default createStore({
    state: {
        LoginInfo: {},
        UserInfo: [],
        currentGroupID: null,
        Group: [],
        GroupTasks: [],
        // BASE_PATH: 'http://127.0.0.1:8000/',
        BASE_PATH: 'https://sk-todoapp.herokuapp.com/',
        tokenKey: ""
    }, 
    getters: {
        loggedIn: (state) => {
          return Boolean(sessionStorage.getItem("tokenkey"))
        }
    },
    mutations: {
        setTokenKey(state, data) {
            state.tokenKey = data
        },
        setUserInfo(state, data) {
            state.UserInfo = data
        },
        setGroupName(state, data) {
            state.Group = data
        },
        setCurrentGroupID(state, data) {
            state.currentGroupID = data
        },
        setCurrentGroupTasks(state, data) {
            state.GroupTasks = data
        }
    },
    actions: {
        async login({state, commit, dispatch}, { username, email, password }) {
            const endpoint = state.BASE_PATH + "api/rest-auth/login/"
            var token = "";
            try {
                await axios.post(endpoint, {
                    username: username,
                    email: email,
                    password: password
                }).then(response => (token = response.data["key"]))
                commit('setTokenKey', token)
                sessionStorage.setItem('tokenkey', state.tokenKey);
                await dispatch('getCurrentUserInfo')
                await dispatch('getGroupName')
            } catch(error) {
                alert(error.response.statusText)
            }
        },
        async logout({state}) {
            const endpoint = state.BASE_PATH + "api/rest-auth/logout/"
            try {
                await axios.post(endpoint);
                state.tokenKey = ""
                state.UserInfo = []
                sessionStorage.removeItem('tokenkey')
            } catch(error) {
                alert(error.response.statusText)
            }
        },
        async registration({state}, { username, email, password1, password2 }) {
            const endpoint = state.BASE_PATH + "api/rest-auth/registration/"
            try {
                await axios.post(endpoint, {
                    username: username,
                    email: email,
                    password1: password1,
                    password2: password2,
                });
                console.error("regi")
            } catch(error) {
                console.error(endpoint)
                alert(error.response.statusText)
            }
        },
        async getCurrentUserInfo({ state, commit }) {
            const endpoint = state.BASE_PATH + "api/user/";
            console.error(123);
            try {
                const response = await axios.get(endpoint,{
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                });
                commit('setUserInfo', response.data)
                commit('setCurrentGroupID', state.UserInfo.groups[0])
                console.error("getCurrentUserInfo")
            } catch(error) {
                alert(error.response.statusText)
            }
        },
        async getGroupName({ state, commit }){
            const endpoint = state.BASE_PATH + "api/group/"
            try {
                const response = await axios.get(endpoint, {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                });
                commit('setGroupName', response.data.results)
            } catch(error) {
                alert(error.response.statusText)
            }
        },
        async getCurrentGroupTasks({ commit, state }) {
            const endpoint = state.BASE_PATH + "api/tasks/"
            try {
                const response = await axios.get(endpoint, {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                });
                var grouptasks = [];
                response.data.results.forEach(element => {
                    if(element.group == state.currentGroupID) {
                        grouptasks.push(element);
                    }
                });
                commit('setCurrentGroupTasks', grouptasks)
            } catch (error) {
                alert(error.response.statusText);
            }
        },
        async getCreateTask({ state }, { newTaskBody, deadline_at }){
            const endpoint = state.BASE_PATH + `api/users/${state.UserInfo.id}/task/`;
            try {
                await axios.post(endpoint, {
                    taskname: newTaskBody,
                    deadline_at: deadline_at,
                    group: state.currentGroupID
                },
                {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                })
            }
            catch(error){
                alert(error.response.statusText);
            }
        },
        async joinCreatedGroup({state}, { joinGroupName }){
            var group_id = null;
            state.Group.forEach(group => {
                if(group.name === joinGroupName) group_id = group.id;
            });
            state.UserInfo.groups.push(group_id);
            console.error("groups: ", state.UserInfo.groups);
            const endpoint = state.BASE_PATH + 'api/user/';
            try {
                await axios.put(endpoint, 
                    {
                        id: state.UserInfo.id,
                        password: state.UserInfo.password,
                        username: state.UserInfo.username,
                        groups: state.UserInfo.groups
                    },
                    {
                        headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                    }
                )
            }
            catch(error){
                alert(error.response.statusText);
            }
        },
        async getCreateGroup({dispatch, state}, { newGroupName }){
            const endpoint = state.BASE_PATH + 'api/group/';
            try {
                await axios.post(endpoint, {
                     name: newGroupName
                }, 
                {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                })
                await dispatch('getGroupName');
                await dispatch('joinCreatedGroup', {joinGroupName: newGroupName});
            }
            catch(error){
                alert(error.response.statusText);
            }
        },

        async joinGroup({state}, { joinGroupID }){
            state.UserInfo.groups.push(joinGroupID);
            const endpoint = state.BASE_PATH + 'api/user/';
            console.error("joinGroup")
            try {
                await axios.put(endpoint, 
                {
                    id: state.UserInfo.id,
                    password: state.UserInfo.password,
                    username: state.UserInfo.username,
                    groups: state.UserInfo.groups
                },
                {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                })
                console.error("join")
            }
            catch(error){
                console.error("fail")
                alert(error.response.statusText);
            }
        },
        async deleteTask({state}, {task_id}) {
            const endpoint = state.BASE_PATH + `api/tasks/${task_id}/`;
            try {
                await axios.delete(endpoint, {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                });
            } catch (error) {
                alert(error.response.statusText);
            }
        },
        async editTask({state}, {task_id, taskname, deadline_at}) {
            // delete a given answer from the answers array and make a delete request to the REST API
            const endpoint = state.BASE_PATH + `api/tasks/${task_id}/`;
            try {
                await axios.put(endpoint, {
                    taskname: taskname,
                    deadline_at: deadline_at,
                    group: state.currentGroupID
                },
                {
                    headers: { Authorization: 'Token ' + sessionStorage.getItem("tokenkey") }
                });
            } catch (error) {
                alert(error.response.statusText);
            }
        }
    },
    modules: {
    }
})
