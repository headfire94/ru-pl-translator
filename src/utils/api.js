const API_ROOT = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const responseBody = res => res.json();

const getParams = (sourceLang, targetLang, searchText) => ({
    key: 'trnsl.1.1.20170503T170832Z.b8792eeba41df099.f1e3b8f457a3dbacc37a57fd97f0dc7bfd88b71a',
    lang: `${sourceLang}-${targetLang}`,
    text: searchText
});

const api = (sourceLang, targetLang, searchText) => {
    const params = getParams(sourceLang, targetLang, searchText);
    const query = Object.keys(params)
        .map(k => k + '=' + params[k])
        .join('&');

    return fetch(`${API_ROOT}?${query}`)
        .then(responseBody)
        .then(res => {
            if (res.code === 502) {
                return res
            }

            return res.text[0]
        })

};

export default api;
