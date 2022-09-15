export const parseQueryParams = (urlParam: string) => {
    // ?x=10&y=12;
    let parsedParam: { [key: string]: string } = {};

    urlParam.slice(1).split('&').forEach((query) => {
        const [key, value] = query.split('=');
        parsedParam[key] = value
    })

    return parsedParam;
}