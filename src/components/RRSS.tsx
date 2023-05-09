import { faGithub, faTwitter, faDocker } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function RRSS() {
	return (
		<div className='flex justify-between gap-4'>
			<div>
				<a
					href='https://docs.docker.com/engine/reference/builder/'
					rel='noopener noreferrer'
					target='_blank'
					title='Docker'
					className='text-sm dark:bg-custom-dark-950 hover:border-white text-custom-dark-100 hover:text-white font-semibold py-1 px-2 rounded-md'
				>
					<FontAwesomeIcon icon={faDocker} /> Docs
				</a>
			</div>
			<div className='flex gap-2'>
				<a
					href='https://twitter.com/ljaviertovar'
					rel='noopener noreferrer'
					target='_blank'
					title='Twitter'
					className='text-sm dark:bg-custom-dark-950 hover:border-white text-custom-dark-100 hover:text-white font-semibold py-1 px-2 rounded-md'
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a
					href='https://github.com/ljaviertovar/doker-genius'
					rel='noopener noreferrer'
					target='_blank'
					title='Repository GitHub'
					className='text-sm dark:bg-custom-dark-950 hover:border-white text-custom-dark-100 hover:text-white font-semibold py-1 px-2 rounded-md'
				>
					<FontAwesomeIcon icon={faGithub} size='lg' /> Star on GitHub
				</a>
			</div>
		</div>
	)
}
