import { litePage } from "./page.ts"
const page = new litePage({
    githubID: "yuanzui-cf"
})
page.setLink([
    {
        id: "github",
        link: "https://github.com/yuanzui-cf",
    },
    {
        id: "mail",
        link: "mailto:grassblogstu@gmail.com",
    },
    {
        id: "blog",
        link: "https://blog.yzcf.top",
    },
    {
        id: "support",
        link: "#donate",
    },
    {
        id: "telegram",
        link: "https://t.me/yz_cf",
    },
])
page.getPosts("https://blog.yzcf.top/feed.xml")
page.setProject()