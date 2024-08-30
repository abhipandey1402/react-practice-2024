import axios from "axios";

export const executeCodeCompilation = async (language, fileName, fileContent) => {

    const options = {
        method: 'POST',
        url: 'https://onecompiler-apis.p.rapidapi.com/api/v1/run',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_ONECOMPILER_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_ONECOMPILER_RAPIDAPI_HOST
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