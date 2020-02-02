export const hideEmail = (email)=>{
    return email.replace(/(.*)(.{2})(?=@)/,
        (gp1,gp2, gp3)=>{
        let p = '';
            for(let i = 0; i < gp2.length; i++) {
                p+="*"
            }
            p+=gp3
            return p;
        }
    )
};