export default function VideoShow() {

  return (

    <section className="py-10">

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center pb-4">Our Store in Yangon</h2>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <div className="aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zxDdNhaIW28?si=fhqN3d8YuWLa8Vcq"
              title="KTL Textile Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

          </div>

        </div>

      </div>

    </section>

  );
}