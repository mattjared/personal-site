
export async function POST(request:any) {
  const data = await request.json();
  try {
    
  } catch (error) {
      throw new Error();
  }
  const options = { status: 200 }
  return new Response(data, options);
}