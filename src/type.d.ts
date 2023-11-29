type fetchData = {
    object: string,
    id: string,
    created_time: string,
    last_edited_time: string,
    created_by: object,
    last_edited_by: object,
    cover: object,
    icon: object,
    parent: object,
    archived: boolean,
    properties: object,
    url: string,
    public_url: object,
}

type annotations = {
    bold: boolean,
    italic: boolean,
    strikethrough: boolean,
    underline: boolean,
    code: boolean,
    color: string,
}

type richText = {
    id: string,
    type: string,
    rich_text: {
        type: string,
        text: {
            content: string,
            link: object,
        },
        annotations: annotations,
        plain_text: string,
        href: object,
    }[],
}

type properties = {
    Article: richText,
    Tags: {
        id: string,
        type: string,
        multi_select: {
            id: string,
            name: string,
            color: string
        }[],
    },
    Highlight: richText,
    Title: {
        id: string,
        type: string,
        title: {
            type: string,
            text: {
                content: string,
                link: string,
            },
            annotations: annotations,
            plain_text: string,
            href: string,
        }[]
    }
}