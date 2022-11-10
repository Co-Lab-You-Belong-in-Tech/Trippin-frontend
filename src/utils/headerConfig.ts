export const config = {
    headers : {
        "Content-Type" : "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
    }
}