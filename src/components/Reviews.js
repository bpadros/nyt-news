// import swAlert from '@sweetalert/with-react'
import {useNavigate} from 'react-router-dom'

function Reviews () {

    let navigate = useNavigate()

    const submitHandlder = e => {
        e.preventDefault()
        console.log('click')
        
        const keyword = e.currentTarget.keyword.value
        console.log(keyword)
        
        // if(keyword.length > 4) {
        //     e.currentTarget.keyword.value = ''
        //     navigate(`/results?keyword=${keyword}`)
        // }

        if(keyword.length === 0){
            alert('tiene que escribir algo')
        } else if (keyword.length < 4){
            alert('Tienes que escribir mas de 3 caracteres')
        } else {
            e.currentTarget.keyword.value = ''
            navigate(`/results?keyword=${keyword}`)
        }
    }


    return  (
        <>
        <h2>This is the reviews component</h2>
        <form onSubmit={submitHandlder}>
            <label className="form-label mb-0 mx-2">
            <input name='keyword' type="text" placeholder="search a movie"  />
            </label>
            <button type="submit">Search</button>
        </form>
        </>
    )
}

export default Reviews