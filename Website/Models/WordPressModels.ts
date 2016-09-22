module McPhersonApps.Models.WordPress {

    export class PostModel {
        
        constructor(post: Post) {
            this.post = post;
            this._dataService = TypedMVVM.Common.IoC.Container.resolve(Services.DataService);
            this._uiService = TypedMVVM.Common.IoC.Container.resolve(Services.UIService);
            this.buttonClickCommandBind = WinJS.Utilities.markSupportedForProcessing(((ev) => {
                this._dataService.getRepliesWordPressPost(this.post.ID).then((comments) => {
                    this._uiService.showReplies({ replies: new WinJS.Binding.List(comments) }, ev.target);
                });
            }).bind(this));
            this.originalPostClickCommandBind = WinJS.Utilities.markSupportedForProcessing(((ev) => {
                var redirect = window.open(this.post.URL, '_window');
                redirect.location;
            }).bind(this));
        }

        private _dataService: Interfaces.IDataService;
        private _uiService: Interfaces.IUIService;

        buttonClickCommandBind: any;
        originalPostClickCommandBind: any;
        post: Post;
    }

    export interface Author {
        ID: number;
        login: string;
        email: boolean;
        name: string;
        first_name: string;
        last_name: string;
        nice_name: string;
        uRL: string;
        avatar_uRL: string;
        profile_uRL: string;
        site_iD: number;
    }

    export interface Discussion {
        comments_open: boolean;
        comment_status: string;
        pings_open: boolean;
        ping_status: string;
        comment_count: number;
    }

    export interface Category {
        [index: string]: TagProperties;
    }

    export interface TagProperties {
        ID: number;
        name: string;
        slug: string;
        description: string;
        post_count: number;
        meta: Meta;
    }

    export interface Link {
        self: string;
        help: string;
        site: string;
        replies: string;
        likes: string;
        counts: string;
    }

    export interface Meta {
        links: Link;
        wpcom: boolean;
    }



    export interface Tags {
        [index: string]: TagProperties;
    }

    export interface Post_format { }

    export interface Mention { }

    export interface Term {
        category: Category;
        post_tag: Tags;
        post_format: Post_format;
        mentions: Mention;
    }



    export interface Attachment { }


    export interface Capability {
        publish_post: boolean;
        delete_post: boolean;
        edit_post: boolean;
    }

    export interface Other_URL { }

    export interface Post {
        ID: number;
        site_iD: number;
        author: Author;
        date: string;
        modified: string;
        title: string;
        URL: string;
        short_uRL: string;
        content: string;
        excerpt: string;
        slug: string;
        guid: string;
        status: string;
        sticky: boolean;
        password: string;
        parent: boolean;
        type: string;
        discussion: Discussion;
        likes_enabled: boolean;
        sharing_enabled: boolean;
        like_count: number;
        i_like: boolean;
        is_reblogged: boolean;
        is_following: boolean;
        global_iD: string;
        featured_image: string;
        post_thumbnail?: any;
        format: string;
        geo: boolean;
        menu_order: number;
        page_template: string;
        publicize_URLs: any[];
        terms: Term;
        tags: Tags;
        categories: Category;
        attachments: Attachment;
        attachment_count: number;
        metadata: boolean;
        meta: Meta;
        capabilities: Capability;
        other_URLs: Other_URL;
    }

    export interface _header {
        date: string;
        contentType: string;
    }

    export interface GetPostsResponseRoot {
        found: number;
        posts: Post[];
        meta: Meta;
        _headers: _header;
    }

 
 
    export interface Links {
        self: string;
        help: string;
        site: string;
        post: string;
        replies: string;
        likes: string;
    }



    export interface Comment {
        ID: number;
        post: Post;
        author: Author;
        date: Date;
        URL: string;
        short_URL: string;
        content: string;
        status: string;
        parent: boolean;
        type: string;
        like_count: number;
        i_like: boolean;
        meta: Meta;
    }

    export interface Headers {
        Date: string;
        contentType: string;
    }

    export interface GetRepliesRootObject {
        found: number;
        site_ID: number;
        comments: Comment[];
        _headers: Headers;
    }

}