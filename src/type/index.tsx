export type GitData = {
    login: string
    id: number
    node_id: string,
    avatar_url: string,
    url: string,
    html_url: string
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    site_admin: boolean
    name: null,
    company: null,
    blog: string,
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string,
    updated_at: string
}

export type Owner = {
    login: string;
    avatar_url: string;
    repos_url: string;
}
export type Repos = {
    name: string;
    description: string;
    html_url: string
}
