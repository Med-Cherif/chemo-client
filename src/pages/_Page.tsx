import { useLayoutEffect } from "react"

interface IProps {
    children: React.ReactNode
    title?: string
}

const Page = ({ children, title }: IProps) => {

    useLayoutEffect(() => {
        const title = document.querySelector('head')!.querySelector('title')
        if (!title) return
        title.innerText = 'Home | Chemo'
    }, [])

    return <section>
        {children}
    </section> 
}

export default Page;