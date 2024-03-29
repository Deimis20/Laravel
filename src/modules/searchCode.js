import ajaxService from "./ajaxService";

const searchCode = () => {
    document.querySelector('form').addEventListener('submit',(e) => {
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const city = document.querySelector('.city').value;
        let searchResponse;
        ajaxService(searchTerm,city)
            .then(result => searchResponse = result)
            .then(() => document.querySelector('.result').value=searchResponse.data[0].post_code)
            .catch(error => {
                let errorMSG = document.getElementById('errors')
                errorMSG.innerText="Tokio adreso nera. Prasome bandyti dar karta."
                
            })
    })
}

export default searchCode