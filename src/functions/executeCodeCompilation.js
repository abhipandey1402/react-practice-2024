import axios from "axios";

export const executeCodeCompilation = async (language, fileName, fileContent) => {

    const options = {
        method: 'POST',
        url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': "d7cb9d4e26msh56f1b66d1c253a8p1aa910jsn049e2135d115",
            'X-RapidAPI-Host': "onecompiler-apis.p.rapidapi.com"
        },
        data: {
            language: language,
            stdin: "",
            files: [
                {
                    name: fileName,
                    content: fileContent
                }
            ]
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}