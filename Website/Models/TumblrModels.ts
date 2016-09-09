/// <reference path="../services/IDataService.ts" />
/// <reference path="../Scripts/TypedMVVM/include/typedMVVM.ts" />

module McPhersonApps.Models.Tumblr {

    export class CustomPost implements Post {
        blog_name: string;
        id: any;
        post_url: string;
        slug: string;
        type: string;
        date: string;
        timestamp: number;
        state: string;
        format: string;
        reblog_key: string;
        tags: string[];
        short_url: string;
        summary: string;
        recommended_source: any;
        recommended_color: any;
        highlighted: any[];
        note_count: number;
        title: string;
        body: string;
        reblog: Reblog;
        trail: Trail[];
        can_send_in_message: boolean;
        can_like: boolean;
        can_reblog: boolean;
        display_avatar: boolean;
        caption: string;
        image_permalink: string;
        photos: Photo[];

        image_link: Function = () => {
            return this.photos[0].original_size.url;
        };
    }

    export interface Meta {
        status: number;
        msg: string;
    }

    export interface Blog {
        title: string;
        name: string;
        total_posts: number;
        posts: number;
        url: string;
        updated: number;
        description: string;
        is_nsfw: boolean;
        ask: boolean;
        ask_page_title: string;
        ask_anon: boolean;
        share_likes: boolean;
        likes: number;
    }

    export interface Reblog {
        tree_html: string;
        comment: string;
    }

    export interface Theme {
        avatar_shape: string;
        background_color: string;
        body_font: string;
        header_bounds: string;
        header_image: string;
        header_image_focused: string;
        header_image_scaled: string;
        header_stretch: boolean;
        link_color: string;
        show_avatar: boolean;
        show_description: boolean;
        show_header_image: boolean;
        show_title: boolean;
        title_color: string;
        title_font: string;
        title_font_weight: string;
    }

    export interface TrailBlog {
        name: string;
        active: boolean;
        theme: Theme;
        share_likes: boolean;
        share_following: boolean;
    }

    export interface TrailPost {
        id: string;
    }

    export interface Trail {
        blog: TrailBlog;
        post: TrailPost;
        content_raw: string;
        content: string;
        is_current_item: boolean;
        is_root_item: boolean;
    }

    export interface ImageSize {
        url: string;
        width: number;
        height: number;
    }

    export interface Photo {
        caption: string;
        alt_sizes: ImageSize[];
        original_size: ImageSize;
    }


    export interface Post {
        blog_name: string;
        id: any;
        post_url: string;
        slug: string;
        type: string;
        date: string;
        timestamp: number;
        state: string;
        format: string;
        reblog_key: string;
        tags: string[];
        short_url: string;
        summary: string;
        recommended_source?: any;
        recommended_color?: any;
        highlighted: any[];
        note_count: number;
        title: string;
        body: string;
        reblog: Reblog;
        trail: Trail[];
        can_send_in_message: boolean;
        can_like: boolean;
        can_reblog: boolean;
        display_avatar: boolean;
        caption: string;
        image_permalink: string;
        photos: Photo[];
    }

    export interface Response {
        blog: Blog;
        posts: Post[];
        total_posts: number;
    }

    export interface GetPostsResponse {
        meta: Meta;
        response: Response;
    }

}