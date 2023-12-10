import { redirect } from "react-router-dom";

export function requireAuth(request){
    let url , pathname ;
    if (request){
        url = new URL(request.url);
        pathname = url.pathname;
    }
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn){
        return redirect(`/login?message=You must log in first&redirectTo=${pathname}`);
    }
    return null;
}