type paths  = {
    all:string,
    topHeadlines:string,
    sources:string
}


export const apiRoutePaths:object =  {
    all: 'https://newsapi.org/v2/everything',
    topHeadlines: 'https://newsapi.org/v2/top-headlines',
    sources:'https://newsapi.org/v2/top-headlines/sources'
} satisfies paths 