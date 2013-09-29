# maintainer: Philip Müller <philm[at]manjaro[dog]org>

pkgname=manjaro-welcome
pkgver=0.8.8pre1
pkgrel=4
pkgdesc="The Manjaro Welcome utility provides a simple interface for accessing all the relevant information for a new user of Manjaro."
arch=(any)
url="https://git.manjaro.org/core/manjaro-welcome"
license=('GPL')
depends=('python2-simplejson' 'python2-gobject' 'pywebkitgtk')
options=(!emptydirs)

## Stable release
#source=("pamac-$pkgver.tar.gz::http://git.manjaro.org/core/manjaro-welcome/archive-tarball/v$pkgver")
#sha256sums=('9483be4b207d9495639977dec2405ec6a1c81671a830adc0b64b14a4e1e91b4b')

## Git release
#source=(git+http://git.manjaro.org/core/manjaro-welcome.git)
#sha256sums=('SKIP')

package() {
  if [ -e "$srcdir/core-$pkgname" ]; then
	   cd "$srcdir/core-$pkgname/src"
  else
#     cd "$srcdir/$pkgname/src"
     cd "$srcdir"
  fi
	mkdir -p "${pkgdir}/usr/share/${pkgname}"
  mkdir -p "${pkgdir}/usr/share/icons/hicolor"
	cp  -a data/* "${pkgdir}/usr/share/${pkgname}"
	install -D -m644 ${pkgname}.desktop ${pkgdir}/etc/skel/.config/autostart/${pkgname}.desktop
	install -D -m644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
	install -D -m755 "${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
	install -D -m755 "${pkgname}-terminal" "${pkgdir}/usr/bin/${pkgname}-terminal"

}

# vim:set ts=2 sw=2 et:
