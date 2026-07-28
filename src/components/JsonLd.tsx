/**
 * Emits a JSON-LD block.
 *
 * Server-rendered into the HTML so crawlers see it without executing JS. The
 * `<` escape guards against a stray `</script>` inside CMS-authored copy
 * breaking out of the tag.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
