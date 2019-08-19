export default {
    path: '/movie',
    component: ()=> import('@/views/Movie'),
    children: [
        {
            path: 'City',
            component: ()=> import('@/components/City/index.vue'),
        },
        {
            path: 'HotPlaying',
            component: ()=> import('@/components/HotPlaying'),
        },
        {
            path: 'ComingSoon',
            component: ()=> import('@/components/ComingSoon'),
        },
        {
            path: 'Search',
            component: ()=> import('@/components/Search'),
        },
        {
            path: '/movie',
            redirect: '/movie/HotPlaying'
        }
    ]
}