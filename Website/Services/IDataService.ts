
﻿module McPhersonApps.Interfaces {
    export interface IDataService {
        getTitle(): string;
        getContent(): string;
        getCommandButtonText(): string;
        
        getAppList(): Models.AppItemModel[]
        
        getRecentBlogPosts(): WinJS.Promise<Models.Tumblr.CustomPost[]>;

    }
}


