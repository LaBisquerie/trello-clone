import { Button } from '@/components/ui/button';
import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link';

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {userId && (
        <>
          <Link href="/board/create">
            <Button>New board</Button>
          </Link>
          
        </>
      )}
    </main>
  )
}
