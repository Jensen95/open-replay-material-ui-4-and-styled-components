import OpenReplay from '@openreplay/tracker'
import trackerAssist from '@openreplay/tracker-assist'
import { setTag } from '@sentry/react'
import { trackingService } from './trackingService'

const config = {
	openReplayProject: 'mX3DYnXo7bxOM3ehDm9E',
}

const htmlLoadingContainer = document.getElementById(
	'LoadingContainer',
) as HTMLElement

class OpenReplayService {
	private tracker?: OpenReplay
	private initialized = false
	public initialize = () => {
		if (config.openReplayProject == null) {
			return
		}
		this.tracker = new OpenReplay({
			projectKey: config.openReplayProject,
			onStart: ({ sessionToken }) => {
				setTag('openReplaySessionToken', sessionToken)
			},
			network: {
				sessionTokenHeader: true,
				capturePayload: true,
				failuresOnly: false,
				captureInIframes: true,
				ignoreHeaders: ['Cookie', 'Set-Cookie', 'Authorization'],
			},
			__DISABLE_SECURE_MODE: true,
		})

		this.tracker.start({ userID: 'test' })
		this.tracker.use(trackerAssist())
		trackingService.events.subscribe((event) => {
			this.tracker?.event(event.eventName, event.additional)
		})
		htmlLoadingContainer.style.display = 'none'
		this.initialized = true
	}

	public setUser(userId: string) {
		if (!this.initialized) {
			return
		}
		this.tracker?.setUserID(userId)
	}

	public setMetaData(metaData: Record<string, any>) {
		if (!this.initialized) {
			return
		}
		Object.keys(metaData).forEach((key) => {
			this.tracker?.setMetadata(key, metaData[key])
		})
	}
}

export const openReplayService = new OpenReplayService()
