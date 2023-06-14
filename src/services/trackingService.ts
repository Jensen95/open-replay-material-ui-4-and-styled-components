import { ReplaySubject } from 'rxjs'

interface TrackingEvent {
	eventName: string
	additional: Record<string, any>
	options: TrackEventOptions
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TrackingServiceConfig {}

interface TrackEventOptions {
	excludedSources?: string[]
}

class TrackingService {
	private subject = new ReplaySubject<TrackingEvent>(100, 1000 * 30)

	public get events() {
		return this.subject
	}

	// eslint-disable-next-line no-empty-pattern
	public initialize({}: TrackingServiceConfig = {}) {
		// Not implemented
	}

	public trackEvent(
		eventName: string,
		additional: Record<string, any> = {},
		options = {},
	) {
		this.subject.next({ eventName, additional, options })
	}
}

export const trackingService = new TrackingService()
