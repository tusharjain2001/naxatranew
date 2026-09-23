import SliderArrows from './SliderArrows'

// Left-aligned section title used from "The Right Motor" down. Mobile gets arrows beside the title.
export default function SectionHeader({
  title,
  mobileTitle,
  subtitle,
  mobileSubtitle,
  mobileLeading = 'leading-24',
  desktopGap = 'xl:gap-16',
  track,
  desktopArrows = false,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-10 px-16 xl:justify-between xl:gap-0 ${className || 'xl:px-100'}`}>
      <div className={`flex min-w-0 flex-1 flex-col gap-10 capitalize xl:w-1410 xl:flex-none ${desktopGap}`}>
        <h2 className="text-32 leading-36 tracking-display xl:text-64 xl:leading-80">
          {mobileTitle ? (
            <>
              <span className="xl:hidden">{mobileTitle}</span>
              <span className="hidden xl:inline">{title}</span>
            </>
          ) : (
            title
          )}
        </h2>
        {mobileSubtitle && <p className={`text-14 text-grey xl:hidden ${mobileLeading}`}>{mobileSubtitle}</p>}
        {subtitle && (
          <p className={`text-14 text-grey xl:block xl:text-24 xl:leading-32 ${mobileLeading} ${mobileSubtitle ? 'hidden' : ''}`}>{subtitle}</p>
        )}
      </div>
      {track && (
        <>
          <SliderArrows set="mobile" onPrev={track.prev} onNext={track.next} canPrev={track.canPrev} canNext={track.canNext} className="xl:hidden" />
          {desktopArrows && (
            <SliderArrows onPrev={track.prev} onNext={track.next} canPrev={track.canPrev} canNext={track.canNext} className="hidden xl:flex" />
          )}
        </>
      )}
    </div>
  )
}
