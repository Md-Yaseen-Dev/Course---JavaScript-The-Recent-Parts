function options({
    url = "https://frontendmasters.com/courses/js-recent-parts/destructuring-restructuring/",
    method = "post",
    data,                              // this is destructing
    callback,
    headers: [
        headers = "content-type:text",
        ...otherheaders
    ] = []
} = {}) {
    return {
        url, method, data, callback,        // this is call restruction
        headers: [
            headers0,
            ...otherheaders

        ]
    };
}

