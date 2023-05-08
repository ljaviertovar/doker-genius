import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function RRSS() {
	return (
		<div className='flex justify-end gap-4'>
			<a
				href='https://twitter.com/ljaviertovar'
				rel='noopener noreferrer'
				target='_blank'
				title='Twitter'
				className='text-sm dark:bg-custom-dark-950 border border-custom-dark-50 hover:border-white text-custom-dark-50 hover:text-white font-semibold py-1 px-2 rounded-md'
			>
				<FontAwesomeIcon icon={faTwitter} size='md' />
			</a>
			<a
				href='https://github.com/ljaviertovar/doker-genius'
				rel='noopener noreferrer'
				target='_blank'
				title='Repository GitHub'
				className='text-sm dark:bg-custom-dark-950 border border-custom-dark-50 hover:border-white text-custom-dark-50 hover:text-white font-semibold py-1 px-2 rounded-md'
			>
				<FontAwesomeIcon icon={faGithub} size='lg' /> Star on GitHub
			</a>
		</div>
	)
}
