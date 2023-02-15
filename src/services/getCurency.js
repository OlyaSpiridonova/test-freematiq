const getCurency = async (url) => {
    const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
    if (!res.ok) {
        alert('Сервис курсов валют недоступен');
        throw new Error(`Could not fetch ${url}, recivied ${res.status}`)
    }
    return await res.json();
};
const createCurencyData = async () => {
const obj = await getCurency()
console.log('obj', obj);
}
createCurencyData()