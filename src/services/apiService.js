const getSingleUserURL="https://randomuser.me/api/"

function buildFetchOptions(method,bodyObject) {
    let fetchOptions = {};
    fetchOptions.method = method.toLowerCase();
    if (fetchOptions.method === 'post' || fetchOptions.method === 'put') {
        fetchOptions.body = JSON.stringify(bodyObject);
        fetchOptions.headers = {"Content-Type":"application/json"};
    }
    return fetchOptions;
}
async function makeAPICall(url,method,idParam,bodyObject) {
    let fetchOptions = buildFetchOptions(method,bodyObject);
    if (idParam && idParam != null) {
        url += "/"+idParam;
    }
    let apiResponse = await fetch(url,fetchOptions);
    if (apiResponse.status !== 200) return undefined;
    let apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
}


export async function getRandomUser() {
    let singleUser = await makeAPICall(getSingleUserURL,"get");
    return singleUser;
}

export async function getRandUserList(numUsers) {
    let url = getSingleUserURL + '/?results=' + numUsers;
    let apiResult = await makeAPICall(url,"get")
    return apiResult.results;
}