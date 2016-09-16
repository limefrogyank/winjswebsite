
﻿module McPhersonApps.Interfaces {
    export interface IDataService {
        getTitle(): string;
        getContent(): string;
        getCommandButtonText(): string;
        
        getAppList(): Models.AppItemModel[]
        
        getRecentBlogPosts(): WinJS.Promise<Models.Tumblr.CustomPost[]>;

        getRecentWordPressPosts(): WinJS.Promise<Models.WordPress.PostModel[]>;

        getRepliesWordPressPost(id: number): WinJS.Promise<Models.WordPress.Comment[]>;

    }
}


