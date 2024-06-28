export const Sckeleton = () => {
  return (
    <div className="shadow-md rounded-md border-border border">
      <div className="flex flex-col h-full gap-3 items-stretch bg-secondary rounded-md overflow-hidden">
        <div className="aspect-[5/3] shrink-0 relative">
          <div className="absolute w-full h-full top-0 left-0 object-cover animate-pulse">
            <div className="w-full h-full bg-popover"></div>
          </div>
          <span className="absolute right-2 top-2 rounded uppercase text-xs bg-background text-muted-foreground px-1.5 py-1">
            <div className="animate-pulse">
              <p className="w-14 h-4 rounded-full bg-muted-foreground"></p>
            </div>
          </span>
          <span className="bg-secondary absolute bottom-0 right-4 rounded-t-md px-2 py-1.5 flex items-center gap-1.5 text-sm">
            <div className="animate-pulse">
              <div className="rounded bg-popover size-4" />
            </div>
            <div className="animate-pulse">
              <div className="rounded bg-popover h-4 w-6" />
            </div>
          </span>
        </div>

        <div className="p-3 flex-1 flex gap-2 flex-col">
          <p className="text-xs text-muted-foreground/60">
            <div className="animate-pulse">
              <div className="rounded bg-popover h-[1em] w-32" />
            </div>
          </p>

          <h3 className="font-semibold transition text-lg text-secondary-foreground line-clamp-3 group-hover:text-primary">
            <div className="animate-pulse">
              <div className="rounded bg-popover h-[1.2em] w-5/6" />
            </div>
          </h3>

          <h3 className="text-sm line-clamp-2">
            <div className="animate-pulse mb-2">
              <div className="rounded bg-popover h-[1em] w-full" />
            </div>
            <div className="animate-pulse mb-2">
              <div className="rounded bg-popover h-[1em] w-3/5" />
            </div>
          </h3>
          <p className="text-primary font-semibold text-lg mt-auto">
            <div className="animate-pulse">
              <div className="rounded bg-primary h-[1.2em] w-10" />
            </div>
          </p>
          <div className="flex mt-3 font-medium transition px-3 py-1 rounded items-center justify-center gap-2 bg-background hover:bg-primary hover:text-primary-foreground">
            <div className="animate-pulse flex items-center gap-2">
              <div className="rounded bg-muted-foreground size-5" />
              <div className="rounded bg-muted-foreground h-4 w-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
