import { json } from '@sveltejs/kit'

export async function GET (req) {
	const { url: { searchParams } } = req

	const page = searchParams.get('page')
	const pageSize = searchParams.get('pageSize')

	const request = await fetch(`https://newsapi.org/v2/EVERYTHING/?q=nigeria&sortBy=popularity&apiKey=2ec62d0060e740fb95d4e04f0351cea4&pageSize=${pageSize}&page=${page}`)
	const response = await request.json()

	return json(response)
}