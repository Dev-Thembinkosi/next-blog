
 export default function manifest(){
  return {
    name: 'T Dev',
    short_name: 'T Dev Blog',
    description: 'Dev Blog environment',
    start_url: '/',
    display: 'standalone',
    // background_color: '#fff',
    // theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}