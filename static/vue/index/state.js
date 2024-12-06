const { reactive } = Vue;

export const state = reactive({
    selectedUserPackages: null,
    loadingUserPackages: false,
    selectedUser: null,
});