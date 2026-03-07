import { SCREEN_TEXT } from "@/lib/constants"

function Footer() {
  const footer = SCREEN_TEXT.footer
  const whatsappPhone = footer.phone.replace(/\D/g, "")

  return (
    <footer className="mt-10 border-t bg-muted/30">
      <div className="container px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold">{footer.companyName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{footer.address}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Phone:{" "}
              <a
                href={`https://wa.me/${whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {footer.phone}
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              Email:{" "}
              <a href={`mailto:${footer.email}`} className="text-primary hover:underline">
                {footer.email}
              </a>
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
