export interface MenuIterm{
    label?:string;//菜单名称
    icon?:string;//icon

    expanded?:boolean;//是否展开
    disabled?:boolean;//是否可用
    visible?:boolean;//是否可见

    style?:string;//样式
    classStyle?:string;//类class

    url?:string//页面跳转链接www.
    routerLink?:string;//页面内跳转 /theme
    routerLinkActiveOptions?:any; //routerLink选中时传参

  badge?:string;
  badgeStyleClass?:any;

  iterms?:MenuIterm[];

  command?:any;
  target?:string;
}
