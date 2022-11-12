

function authHeader(userLocaInfo: any){
    const config = {
        headers : {
            "Content-Type" : "application/json",
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
            'Authorization': `Bearer ${userLocaInfo?.token}`
        }
    }

    return config
}

export default authHeader;