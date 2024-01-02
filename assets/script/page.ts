export interface Link {
    id: string,
    link: string,
}
export interface Options {
    githubID?: string,
}

export class litePage {
    options: Options
    constructor(options: Options = {}) {
        this.options = options
    }
    setLink(link: Link[]) {
        link.forEach(value => {
            try {
                let ele: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.querySelectorAll(".button#" + value.id)
                ele.forEach(e => {
                    e.addEventListener("click", () => {
                        location.href = value.link
                    })
                })
            } catch(err) {
                console.error(err);
            }
        })
    }
}