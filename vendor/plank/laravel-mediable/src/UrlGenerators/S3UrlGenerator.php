<?php
declare(strict_types=1);

namespace Plank\Mediable\UrlGenerators;

use Illuminate\Contracts\Config\Repository as Config;
use Illuminate\Contracts\Filesystem\Cloud;
use Illuminate\Filesystem\FilesystemManager;
use Plank\Mediable\Helpers\File;

class S3UrlGenerator extends BaseUrlGenerator implements TemporaryUrlGeneratorInterface
{
    /**
     * Filesystem Manager.
     * @var FilesystemManager
     */
    protected $filesystem;

    /**
     * Constructor.
     * @param \Illuminate\Contracts\Config\Repository $config
     * @param \Illuminate\Filesystem\FilesystemManager $filesystem
     */
    public function __construct(Config $config, FilesystemManager $filesystem)
    {
        parent::__construct($config);
        $this->filesystem = $filesystem;
    }

    /**
     * {@inheritdoc}
     */
    public function getAbsolutePath(): string
    {
        return $this->getUrl();
    }

    /**
     * {@inheritdoc}
     */
    public function getUrl(): string
    {
        /** @var Cloud $filesystem */
        $filesystem = $this->filesystem->disk($this->media->disk);
        return $filesystem->url($this->media->getDiskPath());
    }

    public function getTemporaryUrl(\DateTimeInterface $expiry): string
    {
        $root = config("filesystems.disks.{$this->media->disk}.root", '');
        $adapter = $this->filesystem->disk($this->media->disk)->getDriver()->getAdapter();
        $command = $adapter->getClient()->getCommand(
            'GetObject',
            [
                'Bucket' => $adapter->getBucket(),
                'Key' => File::joinPathComponents($root, $this->media->getDiskPath()),
            ]
        );

        return (string)$adapter->getClient()->createPresignedRequest(
            $command,
            $expiry
        )->getUri();
    }
}
