var settle = require('./../core/settle');
var createError = require('../core/createError');

module.exports = function myAdapter(config) {
    return new Promise(function (resolve, reject) {
        import('http')
            .then((http) => {
                http.request(config)
                    .then(resp => {
                        // Prepare the response
                        var responseData = !config.responseType || config.responseType === 'text' ? resp.data : JSON.parse(resp.data);
                        var response = {
                            data: responseData,
                            status: resp.status,
                            statusText: resp.statusText,
                            headers: resp.headers,
                            config: config,
                        };

                        settle(resolve, reject, response);
                    })
                    .catch(e => {
                        reject(createError(e.statusText, config, e.status));
                    });
            });
    });
}
