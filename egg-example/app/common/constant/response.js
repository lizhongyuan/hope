'use strict';


const RES_BODY = {
    SUCCESS: {
        code: 200,
        msg: '处理成功'
    },
    INVALID_PARAM_ERR: {
        code: 400,
        msg: '参数错误'
    },
    SERVER_ERR: {
        code: 0,
        msg: '服务器报错'
    },
    NO_DATA_ERR: {
        code: 404,
        msg: '数据未找到'
    },
    REPEAT_ACTION_ERR: {
        code: 500,
        msg: '无法对该数据进行重复操作'
    },
    TOKEN_ERR: {
        code: 403,
        msg: '无token或token失效'
    }
};

module.exports = {
    RES_BODY
};
