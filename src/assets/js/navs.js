export default {
    navs: [
        { name: "current", title: "首页", path: "/current" },
        { name: "discover", title: "发现", path: "/discover" },
        { name: "designer", title: "设计师", path: "/designer" },
        { name: "job", title: "职位", path: "/job" },
        { name: "special", title: "活动", path: "/special" },
        { name: "zhengban", title: "正版素材", path: "", href: "https://www.hellorf.com/?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=all" },
        { name: "course", title: "课程", path: "", href: "https://www.gogoup.com/?utm_source=zcool&utm_medium=navigate" },
        { name: "more", title: "...", path: "", href: "" }
    ],
    discoverBoxList: [
        { title: "平面", path: "" },
        { title: "UI", path: "" },
        { title: "网页", path: "" },
        { title: "插画", path: "" },
        { title: "动漫", path: "" },
        { title: "摄影", path: "" },
        { title: "空间", path: "" },
        { title: "工业/产品", path: "" },
        { title: "三维", path: "" },
        { title: "影视", path: "" },
        { title: "手工艺", path: "" },
        { title: "纯艺术", path: "" },
        { title: "服装", path: "" },
        { title: "其他", path: "" }
    ],
    discoverCheck: [
        { title: "精选作品", path: "" },
        { title: "精选文章", path: "" },
        { title: "精选收藏", path: "" }
    ],
    discovercheckall: [
        { title: "精选作品", path: "" },
        { title: "精选文章", path: "" },
        { title: "精选收藏", path: "" }
    ],
    jobChild: [
        { title: "职位", path: "" },
        { title: "公司", path: "" },
        { title: "+发布职位", path: "" }
    ],
    specialChild: [
        { title: "设计大赛", path: "" },
        { title: "专题策划", path: "" },
        { title: "线上活动", path: "" },
        { title: "线下活动", path: "" },
        { title: "学习音频", path: "" }
    ],
    zhengbanChild: [
        { title: "图片", path: "", href: "https://www.hellorf.com/?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=img" },
        { title: "视频", path: "", href: "https://www.hellorf.com/video?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=video" },
        { title: "字体", path: "", href: "https://www.hellorf.com/font?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=font" },
        { title: "音乐", path: "", href: "https://www.hellorf.com/music?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=music" },
        { title: "我要供图", path: "", href: "https://contributor.hellorf.com/?utm_source=zcool&utm_medium=index&utm_campaign=navigation&utm_content=contributor" }
    ],
    courseChild: [
        { title: "免费直播月", path: "", href: "https://www.gogoup.com/course/GNTM4/?utm_source=zcool&utm_medium=zzrx&utm_campaign=course_live&utm_content=538&utm_term=design" },
        { title: "学习套餐", path: "", href: "https://www.gogoup.com/jobs?utm_source=zcool&utm_medium=zzrx" },
        { title: "口碑好课", path: "", href: "https://www.gogoup.com/reputation/0?utm_source=zcool&utm_medium=kbhk" }
    ],
    moreMenu: [
        { title: "榜单", path: "" },
        { title: "站酷知产", path: "" },
        { title: "站酷APP", path: "" },
        { title: "站酷字库", path: "" },
    ],
    userMenu: [
        { title: "我的关注", path: "" },
        { title: "我的创作", path: "" },
        { title: "我的收藏", path: "" },
        { title: "我的团体", path: "" },
        { title: "我的简历", path: "" },
        { title: "资料与账号", path: "" }
    ],
    discoverMenuItem: [
        { title: "首页推荐", path: "" },
        { title: "编辑推荐", path: "" },
        { title: "全部推荐", path: "" }
    ],
    discoverSubNavs: [
        {
            title: "全部", name: "all",
            data: [
                {
                    label: "发现",
                    data: [
                        { title: "作品", name: "works" },
                        { title: "文章", name: "article" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "平面", name: "plane",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "品牌", name: "brand" },
                        { title: "标志", name: "mark" },
                        { title: "吉祥物", name: "mascot" },
                        { title: "图案", name: "pattern" },
                        { title: "字体/字形", name: "font" },
                        { title: "宣传品", name: "literature" },
                        { title: "海报", name: "posters" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "UI", name: "ui",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "图标", name: "icon" },
                        { title: "APP界面", name: "app" },
                        { title: "主题/皮肤", name: "Theme" },
                        { title: "游戏UI", name: "game" },
                        { title: "软件界面", name: "software" },
                        { title: "交互/UE", name: "Interaction" },
                        { title: "流程/UE", name: "process" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "网页", name: "web",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "企业官网", name: "enterprise" },
                        { title: "门户/社交", name: "portal" },
                        { title: "电商", name: "electricity" },
                        { title: "专题/活动", name: "topics" },
                        { title: "游戏/娱乐", name: "games" },
                        { title: "个人网站/博客", name: "website" },
                        { title: "移动端网页", name: "mobile" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "插画", name: "illustration",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "商业插画", name: "commercial" },
                        { title: "概念设定", name: "concept" },
                        { title: "绘本", name: "picture" },
                        { title: "儿童插画", name: "children" },
                        { title: "游戏原画", name: "visuals" },
                        { title: "涂鸦/潮流", name: "graffiti" },
                        { title: "像素画", name: "pixel" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "动漫", name: "animation",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "单幅漫画", name: "single" },
                        { title: "短篇/四格漫画", name: "short" },
                        { title: "中/长篇漫画", name: "medium" },
                        { title: "时事漫画", name: "current" },
                        { title: "肖像漫画", name: "portrait" },
                        { title: "绘本", name: "picture" },
                        { title: "网络表情", name: "expression" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "摄影", name: "photography",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "人像", name: "portrait" },
                        { title: "风光", name: "scenery" },
                        { title: "静物", name: "still" },
                        { title: "动物", name: "animal" },
                        { title: "产品", name: "product" },
                        { title: "环境/建筑", name: "environment" },
                        { title: "修图/后期", name: "retouching" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "空间", name: "space",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "建筑设计", name: "building" },
                        { title: "室内设计", name: "indoor" },
                        { title: "舞台美术", name: "stage" },
                        { title: "展示设计", name: "show" },
                        { title: "景观设计", name: "landscape" },
                        { title: "导视设计", name: "advertising" },
                        { title: "其他空间", name: "other" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "工业/产品", name: "industry",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "生活用品", name: "articles" },
                        { title: "交通工具", name: "traffic" },
                        { title: "电子产品", name: "electron" },
                        { title: "工业用品/机械", name: "industrial" },
                        { title: "人机交互", name: "HIC" },
                        { title: "器皿", name: "vessels" },
                        { title: "家具", name: "furniture" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "三维", name: "3d",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "机械/交通", name: "mechanical" },
                        { title: "人物/生物", name: "figure" },
                        { title: "场景", name: "scenario" },
                        { title: "动画/影视", name: "animation" },
                        { title: "建筑/空间", name: "building" },
                        { title: "其他三维", name: "other" },
                        { title: "动漫", name: "anime" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "影视", name: "television",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "短片", name: "short" },
                        { title: "MV", name: "MV" },
                        { title: "长片", name: "long" },
                        { title: "后期/剪辑", name: "late" },
                        { title: "栏目包装", name: "column" },
                        { title: "影视合成/剪辑", name: "movie" },
                        { title: "Motion Graphic", name: "motiongraphic" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "手工艺", name: "crafts",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "铁艺", name: "wrought" },
                        { title: "皮艺", name: "paper" },
                        { title: "工艺品设计", name: "craft" },
                        { title: "手办/原型", name: "prototype" },
                        { title: "手办/模玩", name: "model" },
                        { title: "首饰", name: "jewelry" },
                        { title: "其他手工", name: "other" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "纯艺术", name: "art",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "油画", name: "Oil" },
                        { title: "国画", name: "traditional" },
                        { title: "彩铅", name: "lead" },
                        { title: "装置", name: "device" },
                        { title: "雕塑", name: "sculpture" },
                        { title: "水彩", name: "watercolor" },
                        { title: "水粉", name: "powder" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "服装", name: "clothing",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "运动服饰", name: "movement" },
                        { title: "正装/礼服", name: "dress" },
                        { title: "休闲/流行服饰", name: "leisure" },
                        { title: "童装", name: "Children" },
                        { title: "内衣", name: "underwear" },
                        { title: "泳衣", name: "bathing" },
                        { title: "鞋类", name: "footwear" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "其他", name: "other",
            data: [
                {
                    label: "作品",
                    data: [
                        { title: "全部作品", name: "allworks" },
                        { title: "方案/策划", name: "plan" },
                        { title: "墙绘/立体画", name: "Wall" },
                        { title: "独立游戏", name: "Independent" },
                        { title: "VR设计", name: "VR" },
                        { title: "其他", name: "other" }
                    ]
                },
                {
                    label: "文章",
                    data: [
                        { title: "全部文章", name: "allarticle" },
                        { title: "教程", name: "tutorial" },
                        { title: "观点", name: "viewpoint" },
                        { title: "资讯", name: "information" },
                        { title: "专访", name: "interview" },
                        { title: "公开课", name: "PublicClass" },
                        { title: "书籍", name: "books" }
                    ]
                }
            ]
        },
        {
            title: "自定义", name: "custom",
            data: [
                { title: "平面", choose: false, name: "plane" },
                { title: "UI", choose: false, name: "ui" },
                { title: "网页", choose: false, name: "web" },
                { title: "插画", choose: false, name: "illustration" },
                { title: "动漫", choose: false, name: "animation" },
                { title: "摄影", choose: false, name: "photography" },
                { title: "空间", choose: false, name: "space" },
                { title: "工业/产品", choose: false, name: "industry" },
                { title: "三维", choose: false, name: "3d" },
                { title: "影视", choose: false, name: "television" },
                { title: "手工艺", choose: false, name: "crafts" },
                { title: "纯艺术", choose: false, name: "art" },
                { title: "服装", choose: false, name: "clothing" },
                { title: "其他", choose: false, name: "other" }
            ]
        }
    ],
}