export interface GitHubCommit {
  commit: {
    author: {
      date: string
    }
    message: string
  }
}
