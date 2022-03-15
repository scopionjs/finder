import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <div>
        <div className="item1">
          <Link href="/">
            <a>
              <h1>university finder</h1>
            </a>
          </Link>
        </div>

        <div className="item2">
          <div>
            <Link href="/">
              <a>about me</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>donate</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
