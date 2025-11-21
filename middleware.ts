import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	"spinning-activity-cube",
	"montessori-wooden-farm-toy",
	"montessori-activity-board",
	"bluey-plush-dress-play",
	"wooden-counting-abacus",
	"lego-jurassic-fossils",
	"montessori-sensory-teether",
	"animals-friction-vehicles",
	"stacking-silicone-cups"
]



export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://kuk-hook.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/products/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('mind', 'true', { path: '/', maxAge: 60 })

		return res
	}

}

export const config = {
	matcher: ['/lit'],
}