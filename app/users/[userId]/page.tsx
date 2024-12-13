interface UserIdPageProps {
    params:{
        userId: string
    }
}


const Page = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params
}:UserIdPageProps) =>{
    return (
        <div>
            User Id :{params.userId}
        </div>
    )
}

export default Page