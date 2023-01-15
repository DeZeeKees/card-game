export const parseNonPOJO = async (obj) => {
    return await JSON.parse(JSON.stringify(obj));
}