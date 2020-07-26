let server = process.env.VUE_APP_BASE_API; // 搜索站点

module.exports = {
    yayi: {
        find:server+"/yayi/find",
        delete:server+"/yayi/delete",
        save:server+"/yayi/save",
        money:server+"/yayi/money"
    }
}