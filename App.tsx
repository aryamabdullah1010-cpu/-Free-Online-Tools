import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Analytics from './components/seo/Analytics';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Tools = lazy(() => import('./pages/Tools'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));

// Tool Pages
const ImageCompressor = lazy(() => import('./pages/tools/ImageCompressor'));
const ImageConverter = lazy(() => import('./pages/tools/ImageConverter'));
const ImageResizer = lazy(() => import('./pages/tools/ImageResizer'));
const JpgToPdf = lazy(() => import('./pages/tools/JpgToPdf'));
const PdfToJpg = lazy(() => import('./pages/tools/PdfToJpg'));
const PdfCompressor = lazy(() => import('./pages/tools/PdfCompressor'));
const WordCounter = lazy(() => import('./pages/tools/WordCounter'));
const PercentageCalculator = lazy(() => import('./pages/tools/PercentageCalculator'));
const GpaCalculator = lazy(() => import('./pages/tools/GpaCalculator'));
const QrCodeGenerator = lazy(() => import('./pages/tools/QrCodeGenerator'));

// 404
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-900"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              <Route path="/tools/image-compressor" element={<ImageCompressor />} />
              <Route path="/tools/image-converter" element={<ImageConverter />} />
              <Route path="/tools/image-resizer" element={<ImageResizer />} />
              <Route path="/tools/jpg-to-pdf" element={<JpgToPdf />} />
              <Route path="/tools/pdf-to-jpg" element={<PdfToJpg />} />
              <Route path="/tools/pdf-compressor" element={<PdfCompressor />} />
              <Route path="/tools/word-counter" element={<WordCounter />} />
              <Route path="/tools/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/tools/gpa-calculator" element={<GpaCalculator />} />
              <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
