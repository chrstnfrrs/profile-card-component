import Image from 'next/image'

const Divider = () => (
    <hr className='h-0.25 bg-divider'/>
)

const StatColumn = ({ children }) => (
    <div className='flex flex-col items-center'>
          {children}  
    </div>
)

const StatValue = ({ children }) => (
    <strong className='text-lg font-bold text-darkGrey'>
          {children}  
    </strong>
)

const StatLabel = ({ children }) => (
    <h2 className='text-[10px] text-lightGrey'>
          {children}  
    </h2>
)

const ProfileCard = () => (
    <main className="bg-white w-full max-w-[350px] mx-6 rounded-2xl">
        <div className='flex justify-center items-center rounded-t-2xl bg-patternCard relative h-36'>
            <div className='absolute bottom-[-48px]'>
                <Image src="/image-victor.jpg" alt="me" layout='raw' width="96" height="96" style={{ borderRadius: '50%', border: '5px solid white'}} />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16 mb-6">
            <div className="flex justify-center items-center gap-2.5">
                <h1 className="text-lg text-darkGrey font-bold">Victor Crest</h1>
                <p className="text-lg text-lightGrey">26</p>
            </div>
            <p className="text-sm text-lightGrey">London</p>
        </div>
        <Divider />
        <div className='flex justify-center items-center gap-9 py-6'>
            <StatColumn>
                <StatValue>80K</StatValue>
                <StatLabel>Followers</StatLabel>
            </StatColumn>
            <StatColumn>
                <StatValue>803K</StatValue>
                <StatLabel>Likes</StatLabel>
            </StatColumn>
            <StatColumn>
                <StatValue>1.4K</StatValue>
                <StatLabel>Photos</StatLabel>
            </StatColumn>
        </div>
    </main>
)

export default ProfileCard
